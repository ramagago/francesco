import { formatPrice, type MenuGroup, type MenuItem } from "@/data/menu";

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li>
      <div className="flex items-end gap-3">
        <span className="min-w-0 text-[15px] leading-snug">{item.name}</span>
        {item.price != null ? (
          <>
            <span
              aria-hidden
              className="mb-1 min-w-4 flex-1 border-b border-dotted border-line"
            />
            <span className="shrink-0 tabular-nums">{formatPrice(item.price)}</span>
          </>
        ) : null}
      </div>
      {item.note ? (
        <p className="mt-1 text-sm leading-snug text-muted">{item.note}</p>
      ) : null}
      {item.lines ? (
        <ul className="mt-1 space-y-0.5 text-sm leading-snug text-muted">
          {item.lines.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

function GroupLabel({
  label,
  labelStyle,
}: {
  label: string;
  labelStyle?: "item";
}) {
  const isMarker = labelStyle !== "item" && label.startsWith("(");

  return (
    <h3
      className={
        labelStyle === "item"
          ? "text-[15px] leading-snug"
          : isMarker
            ? "text-sm tracking-wide text-sea"
            : "font-serif text-xl leading-tight italic"
      }
    >
      {label}
    </h3>
  );
}

export function MenuGroupView({ group }: { group: MenuGroup }) {
  return (
    <section className={group.labelStyle === "item" ? "space-y-3" : "space-y-4"}>
      {group.label ? (
        <GroupLabel label={group.label} labelStyle={group.labelStyle} />
      ) : null}
      {group.items ? (
        <ul className="space-y-3">
          {group.items.map((item) => (
            <MenuItemRow key={`${group.label ?? ""}-${item.name}`} item={item} />
          ))}
        </ul>
      ) : null}
      {group.note ? <p className="text-sm text-muted">{group.note}</p> : null}
      {group.groups ? (
        <div className={group.stack ? "grid gap-6" : "grid gap-8 sm:grid-cols-2"}>
          {group.groups.map((nested) => (
            <MenuGroupView
              key={nested.label ?? nested.items?.[0]?.name}
              group={nested}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
