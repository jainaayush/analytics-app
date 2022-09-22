import * as FaIcons from "react-icons/fa";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <FaIcons.FaHome />,
  },
  {
    title: "Inventory",
    path: "/inventory",
    icon: <FaIcons.FaInvision />,
  },
  {
    title: "Retailer Full Product",
    path: "/retailer-full-product",
    icon: <FaIcons.FaProductHunt />,
  },
  {
    title: "Keg Availability",
    path: "/keg-availability",
    icon: <FaIcons.FaHornbill />,
  },
  {
    title: "Product Availability",
    path: "/product-availability",
    icon: <FaIcons.FaPager />,
  },
];

export const colorSet = [
  "#f68ae9",
  "#f2b800",
  "#5fefa4",
  "#fe6969",
  "#298af2",
  "#298af2",
  "#af1ad8",
  "#fb8e34",
  "#775DD0"
];

export const columns = [
  {
    name: "Type Color",
    selector: (row) => (
      <p className="table-circle" style={{ backgroundColor: row.color }}></p>
    ),
    sortable: true,
  },
  {
    name: "Type",
    selector: (row) => row.Type,
    sortable: true,
  },
  {
    name: "Batch ID",
     selector: (row) => row.BatchNumber,
    sortable: true,
  },
  {
    name: "Current Location",
     selector: (row) => row.location,
    sortable: true,
    right: true,
  },
  {
    name: "Product",
     selector: (row) => row.Product,
    sortable: true,
    right: true,
  },
  {
    name: "Quanitity",
     selector: (row) => row.Size,
    sortable: true,
    right: true,
  },
  {
    name: "Time on Shelf",
     selector: (row) => row.statusTime,
    sortable: true,
    right: true,
  },
  {
    name: "Status",
    selector: (row) => (
      <p>
        {" "}
        {row.volume <= 10
          ? "Empty"
          : row.volume <= 90
          ? "Inuse"
          : row.volume <= 100
          ? "Full"
          : "N/A"}
      </p>
    ),
    sortable: true,
    right: true,
  },
];
