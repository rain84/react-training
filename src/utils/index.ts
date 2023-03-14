export const getData = () => [...'ab'].map((val) => val.repeat(10))
export const withLog =
  <T extends Function>(str: string) =>
  (f?: T) =>
    function (this: any, ...args: any) {
      console.log(str)
      return f?.apply(this, args)
    }
