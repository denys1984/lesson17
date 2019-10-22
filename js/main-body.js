class MakeBody {
    constructor(info, point, caption) {
        this.data = {
            info,
            point,
            caption
        }
        this.template = '';
        this.lines = [];
        this.caption = '';
    }
    createCaption() {
        this.caption = `
        <tr>
            <th>${this.data.caption.col1}</th>
            <th>${this.data.caption.col2}</th>
            <th>${this.data.caption.col3}</th>
        </tr>
        `;
    }
    divideData() {
        this.data.info.forEach(element => {
            this.lines.push(`
            <tr>
                <td>${element.name}</td>
                <td>${element.surname}</td>
                <td>${element.age}</td>
            </tr>`);
        });
    }
    completeTable() {
        var str = this.lines.join('');
        this.template = `
            <table cellspacing="0">
            ${this.caption}
            ${str}
            </table>
        `;
    }
    render() {
        this.createCaption();
        this.divideData();
        this.completeTable();
        this.data.point.innerHTML = this.template;
    }
}

let body = new MakeBody(bodyData, enterPointBody, tableCaption);
body.render();