class MakeHeader {
    constructor(menu, enterPointHeader, styleLink, logo) {
      this.data = {
        menuItems: menu,
        enterPoint: enterPointHeader,
        logo,
        styleLink
      };
      this.listItems = [];
      this.template = '';
    }

    createItems() {
      this.data.menuItems.forEach(element => {
        this.listItems.push(`<li><a href="#">${element}</a></li>`);
      })
    }
    compoundForm() {
      this.template = `
      <div class="container">
        <div class="logo">
          <img src="${this.data.logo}" alt="" width="75">
        </div>
        <menu>
          <ul>
          ${this.listItems.join('')}
          </ul>
        </menu>
      </div>
      `;
    }
    render() {
      this.createItems();
      this.compoundForm();
      this.data.enterPoint.innerHTML = this.template;
      document.getElementsByTagName('head')[0].innerHTML = `<link rel="stylesheet" href="${this.data.styleLink}">`;
    } 
  }


let header = new MakeHeader(menu, enterPointHeader, styleLink, logo);
header.render()