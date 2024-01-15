type addOnsProps = {
  addOns: Array<{
    name: string;
    value: string;
    price1: string;
    label1?: string;
    price2?: string;
    label2?: string;
    icon: HeroIcon;
    description: string;
    subDescription?: string;
  }>;
};

export const AddOns = ({ addOns }: addOnsProps) => {
  return (
    <section className="my-4">
      <div className="bg-cws-bg-2/60 w-full rounded-lg text-white px-1 sm:px-6 lg:static lg:px-8 py-12">
        <div className="w-full p-4 text-center rounded-lg bg-cws-primary/70">
          <h2 className="text-2xl sm:text-3xl text-slate-100">
            Customize your Package
          </h2>
          <p className="mt-2 sm:text-lg text-slate-100">
            With optional add-ons for Flat-Rate & Subscription plans
          </p>
        </div>
        <table className="min-w-full mt-12">
          <colgroup>
            <col className="w-full sm:w-2/3" />
            <col className="min-w-1/6" />
            <col className="min-w-1/6" />
          </colgroup>
          <thead className="border-b border-slate-100 text-xl font-semibold">
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left sm:pl-0">
                Name
              </th>
              <th scope="col" className="py-3.5 pl-3 pr-4 text-center sm:pr-0">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {addOns.map((entry) => {
              return (
                <tr key={entry.value}>
                  <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="font-semibold text-xl md:text-2xl flex gap-2">
                      <entry.icon className="h-7 w-7 text-white" />
                      {entry.name}
                    </div>
                    <div className="mt-1 text-slate-300 text-sm md:text-base">
                      {entry.description}
                    </div>
                    {entry.subDescription && (
                      <div className="mt-2 text-xs text-slate-400">
                        {entry.subDescription}
                      </div>
                    )}
                  </td>
                  <td className="py-6 text-center text-xl md:text-2xl sm:pr-0 align-top">
                    <div>{entry.price1}</div>
                    {entry.label1 && (
                      <div className="text-xs sm:text-sm text-slate-200">
                        {entry.label1}
                      </div>
                    )}
                  </td>
                  <td className="py-6 text-xl px-4 md:px-8 align-top">
                    <button
                      type="button"
                      className="rounded-lg bg-cws-primary px-2.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cws-bg-2 ring-1 min-w-max"
                    >
                      Add to quote
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};
