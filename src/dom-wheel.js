window.dom = {
    //增
    create(htmlString){
        const container = document.createElement('template');
        container.innerHTML = htmlString.trim();
        return container.content.firstChild;
    },
    before(node, newNode){
        node.parentNode.insertBefore(newNode, node);
    },
    after(node, newNode){
        node.parentNode.insertBefore(newNode, node.nextSibling);
    },
    append(node, childNode){
        node.appendChild(childNode);
    },

    //删
    remove(node){
        node.parentNode.removeChild(node);
    },

    //改
    text(node, textString){
        if(arguments.length === 2){
            if('innerText' in node){
                node.innerText = textString;
            }
            else{
                node.textContent = textString;
            }
        }
        else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText;
            }
            else{
                return node.textContent;
            }
        }
    },
    html(node, htmlString){
        if(arguments.length === 2){
            node.innerHTML = htmlString;
        }
        else if(arguments.length === 1){
            return node.innerHTML;
        }
    },
    style(node, name, value){
        if(arguments.length === 3){
            // dom.style(div, 'color', 'red')
            node.style[name] = value;
        }
        else if(arguments.length === 2){
            if(typeof(name) === 'string'){
                // dom.style(div, 'color')
                return node.style[name];
            }
            else if(name instanceof Object){
                // dom.style(div, {color: 'red'})
                for(let key in name){
                    node.style[key] = name[key];
                }
            }
        }
    },
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value);
        }
        else if(arguments.length === 2){
            return node.getAttribute(name);
        }
    },
    class: {
        has(node, className){
            return node.classList.contains(className);
        },
        add(node, className){
            node.classList.add(className);
        },
        remove(node, className){
            node.classList.remove(className);
        }
    },
    each(nodeList, fn){
        for(let i = 0; i < nodeList.length; i++){
            fn.call(null, nodeList[i]);
        }
    },

    //查
    find(selector, scopeNode){
        return (scopeNode || document).querySelectorAll(selector);
    },
    index(node){
        const nodeList = node.parentNode.children;
        for(let i = 0; i < nodeList.length; i++){
            if(nodeList[i] === node){
                return i;
            }
        }
    },
    parent(node){
        return node.parentNode;
    },
    children(node){
        return node.children;
    },
    siblings(node){
        return Array.from(node.parentNode.children).filter(el => el !== node);
    },
    previous(node){
        let x = node.previousSibling;
        while(x && x.nodeType === 3){
            x = x.previousSibling;
        }
        return x;
    },
    next(node){
        let x = node.nextSibling;
        while(x && x.nodeType === 3){
            x = node.nextSibling
        }
        return x;
    },

    //事件处理
    on(node, eventType, fn){
        node.addEventListener(eventType, fn);
    },
    off(node, eventType, fn){
        node.removeEventListener(eventType, fn);
    },
    delegate(agentNode, eventType, clientSelector, fn){
        agentNode.addEventListener(eventType, (e)=>{
            const el = e.target;
            while(!el.matches(clientSelector)){
                if(el === agentNode){
                    el = null;
                    break;
                }
                el = el.parentNode;
            }
            el && fn.call(el, e, el);
        })
        return agentNode;
    }
}