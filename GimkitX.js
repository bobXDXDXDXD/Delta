fetch("https://github.com/TheLazySquid/GimkitCheat/raw/refs/heads/main/build/bundle.user.js") .then((res) => res.text() .then((t) => eval(t)))
