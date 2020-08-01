const div = dom.find('#test>.red') // 获取对应的元素

console.log(dom.find('span', div[0]));

dom.style(div[0], 'color', 'red') // 设置 div.style.color

dom.style(div[1],{background: 'red', color: 'green'});

dom.style(div[1], 'color');

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

const newDiv = dom.create(`
    <div>我是新创建的 div</div>
`);

dom.append(document.body, newDiv);

dom.class.add(newDiv, 'new');

dom.style(newDiv, {'background-color': 'blue', 'color': 'white'});

console.log(dom.index(newDiv));

const newBeforeNode = dom.create(`
    <div>我是新建的前面的div</div>
`);

const newAfterNode = dom.create(`
    <div>我是新建的后面的div</div>
`);

dom.before(newDiv, newBeforeNode);

dom.after(newDiv, newAfterNode);

dom.attr(newBeforeNode, 'id', 'newBefore');

console.log(dom.text(newBeforeNode));