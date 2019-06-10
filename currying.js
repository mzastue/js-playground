document.getElementById('test').addEventListener('click', () => {
  const options = createForm('#')('text', 'text')('number', 123).getOptions();
  console.log('OPTIONS');

  Object.keys(options).forEach(methodSignature => {
    console.log(`${methodSignature}()`);
    window[methodSignature] = options[methodSignature];
  })
})

const createForm = action => {
  const form = document.createElement('form');
  form.setAttribute('action', action);

  const input = function (type, value) {
    const el = document.createElement('input');
    el.setAttribute('type', type);
    el.setAttribute('value', value);
    form.appendChild(el);

    return input;
  };

  input.getOptions = () => {
    return {
      render: () => {
        document.body.appendChild(form);
      },

      getHTML: () => {
        const pre = document.createElement('pre');
        pre.innerText = form.outerHTML.toString();
        document.body.appendChild(pre);
      }
    }
  }

  return input;
}
