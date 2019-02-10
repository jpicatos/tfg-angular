const Colors = [
    "#E6B0AA",
    "#F5B7B1",
    "#D7BDE2",
    "#D2B4DE",
    "#A9CCE3",
    "#AED6F1",
    "#A3E4D7",
    "#A2D9CE",
    "#A9DFBF",
    "#ABEBC6",
    "#F9E79F",
    "#FAD7A0",
    "#F5CBA7",
    "#EDBB99",
    "#CCD1D1",
    "#AEB6BF",
    "#ABB2B9",
    "#e5c6a0"
];
export const getRandomColor = () => {
    var num = Math.round(Math.random() * (Colors.length - 0) + 0);
    return Colors[num];
}
export default Colors;