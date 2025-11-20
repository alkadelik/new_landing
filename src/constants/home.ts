import { TChipColor } from "@components/Chip.vue"

export const PRICINGS: Array<{
  name: string
  price: number
  background: string
  features: string[]
}> = [
  {
    name: "Bud",
    price: 2, // price in thousands
    background:
      "background: linear-gradient(101.09deg, #ECFDF3 0%, #A9EFC5 100.08%); border: 1px solid #A9EFC5",
    features: [
      "Unlimited orders",
      "20 products",
      "Unlimited invoices & receipts",
      "Automated delivery",
      "Basic chat & email support",
      "Basic storefront",
      "Basic order management",
    ],
  },
  {
    name: "Bloom",
    price: 15, // price in thousands
    background:
      "background: linear-gradient(101.09deg, #FAFEF5 0%, #E3FBCC 100.08%); border: 1px solid #D0F8AB",
    features: [
      "All basic features",
      "Unlimited products",
      "Unlimited popups",
      "Advanced reports",
      "Priority chat & email support",
      "Branded storefront",
      "Advanced order management",
    ],
  },
]

export const SOLUTIONS = [
  {
    title: "Achieve more",
    subtitle:
      "Handle more sales with built-in shipping, track expenses*, and get closer to your customers.",
    icon: "message-chat-circle",
  },
  {
    title: "Insights",
    subtitle: "Understand your numbers, spot opportunities, and grow with confidence.",
    icon: "zap",
  },
  {
    title: "Future ready",
    subtitle: "Stay ahead with tools built to evolve - ready for AI and whatever comes next.",
    icon: "chart-breakout-square",
  },
]

export const LEYYOW_PAGES: Array<{
  title: string
  subtitle: string
  link: string
  linkText: string
  tag: string
  tagColor: TChipColor
}> = [
  {
    title: "Tips for selling online",
    subtitle: "We sell online because selling helps us to be better people and make some change...",
    link: "#",
    linkText: "Read the story",
    tag: "Tips",
    tagColor: "blue",
  },
  {
    title: "Tips for selling online",
    subtitle: "We sell online because selling helps us to be better people and make some change...",
    link: "#",
    linkText: "Read the story",
    tag: "Docs",
    tagColor: "purple",
  },
  {
    title: "Tips for selling online",
    subtitle: "We sell online because selling helps us to be better people and make some change...",
    link: "#",
    linkText: "Read the story",
    tag: "Insights",
    tagColor: "success",
  },
]

export const BUSINESSES = Array.from({ length: 5 }, (_, index) => ({
  id: index + 1,
  url: `/images/businesses/${index + 1}.png.jpeg`,
}))

export const FEATURES: Record<
  string,
  Array<{ image: string; title: string; subtitle: string; beta?: boolean }>
> = {
  Optimise: [
    {
      image: "/images/inventory-list.png",
      title: "Sell Online",
      subtitle:
        "Launch your store in minutes with Leyyow's customizable Storefront. Start taking orders and shipping right away.",
    },
    {
      image: "/images/order-card.png",
      title: "Manage sales & deliveries",
      subtitle:
        "Track and fulfill orders with ease — from online store sales to pop-up events. Update payments, send invoices, and manage shipments all in one place.",
    },
    {
      image: "/images/inventory-details.png",
      title: "Smart inventory management",
      subtitle:
        "Automatically sync your stock across all channels. Manage product variants, prices, and quantities without worrying about double-selling.",
    },
    {
      image: "/images/popups.png",
      title: "Prepare for Pop-ups",
      subtitle:
        "Plan in-person events with ease. Set up special discounts, choose products to showcase, and build customer relationships offline.",
    },
  ],
  Scale: [
    {
      image: "/images/customer-heart.png",
      title: "Build customer relationships",
      subtitle:
        "Understand your customers better with insights into purchase history, spending patterns, and shopping habits. Personalise offers, reward loyalty, and keep them coming back.",
    },
    {
      image: "/images/locations.png",
      title: "Manage multiple locations",
      subtitle:
        "Oversee all your stores from one dashboard. Track performance by branch, transfer stock between locations, and keep everything synced.",
    },
    {
      image: "/images/multiple-users.png",
      title: "Add Multiple Users",
      subtitle:
        "Invite your team, partners, and accountants to collaborate - with precise access control. Assign permissions by role so everyone gets exactly the tools they need.",
    },
    {
      image: "/images/upcoming-popups.png",
      title: "Discover upcoming pop-ups",
      subtitle:
        "Find pop-up events happening near you and connect with other small businesses and customers in real life.",
    },
  ],
  Improve: [
    {
      image: "/images/report-chart.png",
      title: "View reports & insights",
      subtitle:
        "Get visibility. Spot trends. Plan smarter. Leyyow’s reports turn daily data into insights - helping you track performance, set goals, and make confident decisions.",
    },
    {
      image: "",
      title: "Track expenses",
      beta: true,
      subtitle:
        "See where your money goes. Record expenses easily so you can stay on budget and spend smarter. ",
    },
  ],
}
