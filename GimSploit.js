fetch("https://raw.githubusercontent.com/TheLazySquid/GimkitCheat/refs/heads/main/build/bundle.js") .then((res) => res.text() .then((t) => eval(t)))
