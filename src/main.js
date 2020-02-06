const div = dom.find('#test>.red') // 获取对应的元素

console.log(dom.find('span', div[0]));

dom.style(div[0], 'color', 'red') // 设置 div.style.color

dom.style(div[1],{background: 'red', color: 'green'});

dom.style(div[1], 'color');

const divList = dom.find('.red') // 获取多个 div.red 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素

