/*
 * @Date: 2024-03-11 16:36:29
 * @LastEditors: zhangsk
 * @LastEditTime: 2024-03-11 17:39:32
 * @FilePath: \zsk6-check-type\src\type.ts
 * @Label: Do not edit
 */


export default function checkType(value: any): TypeValue {
  if (value === null) {
    return "null";
  }
  const baseType = typeof value;
  // 基本类型
  if (!["object", "function"].includes(baseType)) {
    return baseType;
  }

  // Symbol.toStringTag 通常指定对象类的“display name”
  // 它在 Object.prototype.toString() 中使用。
  const tag = value[Symbol.toStringTag];
  if (typeof tag === "string") {
    return tag;
  }

  // 如果它是一个函数，其源代码以 "class" 关键字开头
  if (
    baseType === "function" &&
    Function.prototype.toString.call(value).startsWith("class")
  ) {
    return "class";
  }

  // 构造函数的名称；例如 `Array`、`GeneratorFunction`、`Number`、`String`、`Boolean` 或 `MyCustomClass`
  const className = value.constructor.name;
  if (typeof className === "string" && className !== "") {
    return className;
  }

  // 在这一点上，没有合适的方法来获取值的类型，因此我们使用基本实现。
  return baseType;
}

