const form = document.getElementById('input_form');

const input = document.getElementById('input');
const type = document.getElementById('type');

const answer = document.getElementById('solution');

const calc = (splits, step = 1) => {
    let total = 0;

    for (let i = 0; i < splits.length; i++) {
        let current = splits[i];
        let next = splits[i + step];

        if ( typeof next === 'undefined' ) {

            let before_end = splits.length - i;
            let from_start = step - before_end;

            next = splits[from_start];
        }

        if (current === next) {
            total += current;
        }
    }

    solution.innerHTML = `Answer is: ${total}`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let value = input.value;

    let splits = value.split('').map(Number);

    const steps = type.checked ? (splits.length / 2) : 1;

    calc(splits, steps);
})