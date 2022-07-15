/* 静态块，允许在类的内部设置一个代码块，在类生成时运行一次，主要作用是对静态属性进行初始化。 */
class C {
  static x = 1;
  static y;
  static z;

  static {
    try {
      const obj = doSomethingWith(this.x);  //this与类名C等价
      this.y = obj.y;
      this.z = obj.z;
    }
    catch {
      this.y = 0;
      this.z = 0;
    }
  }
}

/* 除了静态属性的初始化，静态块还有一个作用，就是将私有属性与类的外部代码分享。

let getX;

export class C {
  #x = 1;
  static {
    getX = obj => obj.#x;
  }
}

console.log(getX(new C())); // 1
上例中，#x是类的私有属性，如果类外部的getX()方法希望获取这个属性，以前是要写在类的constructor()方法里面，这样的话，每次新建实例都会定义一次getX()方法。
现在可以写在静态块里面，这样的话，只在类生成时定义一次。 */