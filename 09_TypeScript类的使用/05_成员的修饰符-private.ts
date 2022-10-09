class Person {
  private name: string = 'IamZJT'

  // 封装了两个方法，通过方法来访问name
  getName() {
    return this.name
  }

  setName(newName: string) {
    this.name = newName;
  }
}

const p = new Person();
console.log(p.getName());
p.setName('123');

export {}
