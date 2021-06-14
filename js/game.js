class Player {
    constructor() {
        this.gridStep = 150;
        this.node = document.createElement('div');
        this.x = 0;
        this.y = 0;

        this.node.classList.add('space-ship');

        this.addListeners();
        this.render();
    }

    addListeners() {
        document.addEventListener('animationend', () => {
            this.node.classList.remove('space-ship-bounce');
        })

        document.addEventListener('keydown', (event) => {
            this.node.classList.add('space-ship-bounce');

            if(event.key === 'S' || event.key === 's') {
                this.moveDown();
            }

            if(event.key === 'A' || event.key === 'a') {
                this.moveLeft();
            }

            if(event.key === 'W' || event.key === 'w') {
                this.moveUp();
            }

            if(event.key === 'D' || event.key === 'd') {
                this.moveRight();
            }
        });
    }

    moveLeft() {
        let left = Number.parseInt(this.node.style.left) - this.gridStep || this.x;

        if(left <= 0) {
            left = 0;
        }

        this.node.style.left = left + 'px';
    }

    moveRight() {
        let left = Number.parseInt(this.node.style.left) + this.gridStep || this.x;

        if(left >= document.body.clientWidth) {
            left = document.body.clientWidth;
        }

        this.node.style.left = left + 'px';
    }

    moveUp() {
        let top = Number.parseInt(this.node.style.top) - this.gridStep || this.y;

        if(top <= 0) {
            top = 0;
        }

        this.node.style.top = top + 'px';
    }

    moveDown() {
        let top = Number.parseInt(this.node.style.top) + this.gridStep || this.y;

        if(top >= document.body.clientHeight) {
            top = document.body.clientHeight;
        }

        this.node.style.top = top + 'px';
    }

    render() {
        this.node.style.top = this.y + 'px';
        this.node.style.left = this.x + 'px';
        document.body.appendChild(this.node);
    }
}

class Asteroid {
    constructor() {
        this.node = document.createElement('div');
        this.gridStep = 150;
        this.x = 0;
        this.y = this.randomiseY();

        this.node.classList.add('asteroid');
        this.render();
    }

    randomiseY() {
        return Math.floor(Math.random() * document.body.clientHeight);
    }

    moveX() {
        const interval = setInterval(() => {
            this.x = Number.parseInt(this.node.style.right) + this.gridStep;
            this.node.style.right = this.x + 'px';

            if(this.x <= 0) {
                clearInterval(interval);
                this.destroy();
            }
        }, 1000);
    }

    destroy() {
        this.node.remove();
    }

    render() {
        this.node.style.right = this.x + 'px';
        this.node.style.top = this.y + 'px';
        document.body.appendChild(this.node);

        this.moveX();
    }
}

new Player();

// new Asteroid();
// new Asteroid();

setInterval(() => {
    new Asteroid();
}, 1000);