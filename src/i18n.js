export const message = {
  cn: {
    message: {
      hello: "世界",
      unrealized: "未实现（-0-）",
      iotone: "",
    },
  },
  en: {
    message: {
      hello: "hello world",
      unrealized: "unrealized（-0-）",
      iotone:
        "It covers all Ant offline payment devices, Alipay boxes in small and medium-sized merchants, self-ordering machines in large shopping malls, face-sweeping payment devices, and so on.",
      iottwo:
        "The entry point of the payment devices is to solve the payment problem, besides the payment scenario, there are also a lot of things related to the content operation",
      desc: "Brief description",
      iotjob1: "Dynamic business scenarios on everyday IoT devices",
      iotjob2: "UIPaaS for IoT marketing",
    },
  },
};
export function getLanguage() {
  const paths = location.hash.split("/");
  const lastItem = paths.pop();
  const language = paths.length > 0 ? lastItem : "cn";
  return language;
}
