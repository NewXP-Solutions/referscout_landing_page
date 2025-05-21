export function ChartContainer({ children, config, className }) {
  return (
    <div
      className={className}
      style={{
        "--color-fcf": config?.fcf?.color || "hsl(var(--chart-1))",
        "--color-pv": config?.pv?.color || "hsl(var(--chart-2))",
      }}
    >
      {children}
    </div>
  )
}

export function ChartTooltip({ children, ...props }) {
  return <div {...props}>{children}</div>
}

export function ChartTooltipContent({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-2 shadow-sm">
        <p className="font-medium">{`Year: ${label}`}</p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ color: entry.color }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}
