export const message = {
  cn: {
    message: {
      hello: "世界",
      unrealized: "未实现（-0-）"
    },
  },
  en: {
    message: {
      hello: "hello world",
      unrealized: "unrealized（-0-）"
    },
  }
};
export function getLanguage(){
    const paths = location.hash.split('/');
    const lastItem = paths.pop();
    const language = paths.length > 0 ? lastItem: 'cn';
    return language;
}
