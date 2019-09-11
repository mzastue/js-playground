class FormDirector {
  constructor() {
    this.forms = [];
  }

  createNewForm(formCreator) {
    this.forms.push(
      formCreator.create()
    );
  }
}

class FormCreator {
  constructor(action) {
    this.action = action;
    this.formWorkPlace = document.createElement('div');
    this.preapreCreationFormHelper();
    document.body.appendChild(this.formWorkPlace);
  }

  create() {
    const form = document.createElement('form');
    form.setAttribute('action', this.action);

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

  preapreCreationFormHelper() {
    const row = document.createElement('div')
    const typeInput = document.createElement('input');
    const valueInput = document.createElement('input');
    const button = document.createElement('button');
    typeInput.placeholder = 'type';
    valueInput.placeholder = 'value';
    button.textContent = '+';
    button.addEventListener('click', this.preapreCreationFormHelper.bind(this))

    row.appendChild(typeInput);
    row.appendChild(valueInput);
    row.appendChild(button);
    row.style.display = 'block';

    this.formWorkPlace.appendChild(row);
  }
}

const formDirector = new FormDirector();

document.getElementsByClassName('creator__create_new_form')[0].addEventListener('click', event => {
  event.preventDefault();

  const form = event.target.form;
  const formData = new FormData(form);
  formDirector.createNewForm(
    new FormCreator(formData.get('form_action'))
  );
})
