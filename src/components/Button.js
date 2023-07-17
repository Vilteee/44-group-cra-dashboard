import './Button.css';

let btnName = 'Finish Sprint';
export function Button() {
    return (
        <button class="btn-green" type="submit">{btnName}</button>
    )
}