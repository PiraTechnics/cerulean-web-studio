import {
  ShoppingBagIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

const addOnChoices = [
  {
    name: "E-Commerce",
    value: "ecommerce",
    price1: "$1000",
    icon: <ShoppingBagIcon />,
    description:
      "Turn your site into a digital storefront with the power of digital commerce integration! Use with your own Shopify account.",
  },
  {
    name: "Blog",
    value: "blog",
    price1: "$200",
    price2: "$40",
    label2: "Per Month",
    icon: <DocumentTextIcon />,
    description:
      "Create and edit your own articles easily with a stylish minimalist blogging interface.",
  },
  {
    name: "Extra Page",
    value: "extrapage",
    price1: "$100",
    icon: <DocumentDuplicateIcon />,
    description:
      "Add more content to your site! Additional design consultation provided at no charge.",
  },
  {
    name: "Managed Domain Name",
    value: "manageddomain",
    price1: "$25",
    price2: "$5",
    label1: "Per Month",
    label2: "Per Month",
    icon: <GlobeAltIcon />,
    description:
      "No domain name? No Problem! We'll handle the work of purchasing and configuring everything to work with your site.",
    subDescription:
      "*Price estimated from registrar rates. Includes cost of 1-year purchase of available domain of choice. Domain transfers to customer upon cancellation.",
  },
];

export const AddOns = () => {
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
            {addOnChoices.map((entry) => {
              return (
                <tr key={entry.value}>
                  <td className="max-w-0 py-5 pl-4 pr-3 text-sm sm:pl-0">
                    <div className="font-semibold text-xl md:text-2xl">
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
