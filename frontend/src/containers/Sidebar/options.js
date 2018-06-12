import getDevSidebar from "../../customApp/sidebar";
const options = [
  {
    key: "componentGuide",
    label: "sidebar.componentGuide",
    leftIcon: "ion-android-list"
  },
  ...getDevSidebar
];
export default options;
