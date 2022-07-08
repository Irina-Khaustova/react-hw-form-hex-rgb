export default function convertor(hex) {
    let rgb;
    if(hex.length ===7) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        rgb = result ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : null;
    } else {
        rgb = null;
    }
    return rgb;
}