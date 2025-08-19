export  function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-border bg-secondary-background text-foreground/65 font-base">
      <div className="animate-marquee whitespace-nowrap py-6">
        {items.map((item, id) => {
          return (
            <span key={id} className="mx-4 text-3xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-6">
        {items.map((item, id) => {
          return (
            <span key={id} className="mx-4 text-3xl">
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
};

export  function ReverseMarquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-x-hidden border-b-2 border-t-2 border-border bg-secondary-background text-foreground/65 font-base">
      <div className="animate-reverse-marquee whitespace-nowrap py-6">
        {items.map((item, id) => {
          return (
            <span key={id} className="mx-4 text-3xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-reverse-marquee2 whitespace-nowrap py-6">
        {items.map((item, id) => {
          return (
            <span key={id} className="mx-4 text-3xl">
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}

