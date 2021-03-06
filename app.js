const text = [
    " Soufflé danish pastry lollipop icing cake. Pie danish jelly brownie halvah. Candy marzipan muffin danish chupa chups ice cream bear claw. Jujubes cotton candy tart jelly beans toffee. Halvah pastry jelly-o gummies dessert. Sweet jelly beans jelly-o lemon drops caramels chocolate cake gummi bears tart. Sweet sweet tiramisu cotton candy muffin jelly-o cheesecake.",
    "Carrot cake soufflé cotton candy donut tart candy canes. Bonbon liquorice cheesecake toffee sugar plum danish caramels. Toffee jelly danish. Jujubes candy canes gingerbread. Candy sweet gummies carrot cake powder topping. Fruitcake chocolate cake chocolate cake marzipan brownie cupcake. Chocolate cake cotton candy apple pie tiramisu jelly tart sweet roll icing.",
    "Caramels oat cake cheesecake chupa chups danish. Dragée carrot cake carrot cake chocolate bar candy dessert topping. Sesame snaps danish bear claw gummies apple pie. Oat cake dragée sweet chocolate apple pie pudding marzipan marshmallow dessert. Pudding sweet pudding sugar plum cheesecake. Cookie marshmallow muffin cookie. Dragée tootsie roll jelly beans cookie cake liquorice croissant toffee sweet roll.",
    "Caramels sesame snaps cheesecake halvah sweet oat cake sweet roll. Jujubes lollipop icing. Sweet liquorice carrot cake cake cupcake gummies gummies biscuit. Chocolate jelly-o ice cream. Jelly beans tootsie roll cupcake chocolate bar. Croissant bear claw macaroon. Liquorice apple pie cotton candy cotton candy apple pie sugar plum jujubes. Fruitcake liquorice jelly.",
    " apple pie ice cream sesame snaps. Gummies lemon drops sweet cheesecake. Candy canes muffin candy dragée chocolate bar dessert. Cake chocolate bar sweet gingerbread gingerbread candy. Bear claw cotton candy jelly beans lemon drops pastry jelly. Toffee wafer cotton candy biscuit croissant jelly-o fruitcake cupcake. Pastry halvah apple pie tart jelly biscuit lollipop. Dessert jelly bonbon wafer biscuit. Cheesecake tiramisu cookie bear claw dragée marshmallow candy wafer cheesecake. Muffin sesame snaps caramels.",
    "Chocolate wafer sesame snaps cake tootsie roll cotton candy. Sesame snaps lemon drops dragée pie brownie icing ice cream. Ice cream toffee dragée biscuit pudding chocolate cake. Tiramisu topping topping marzipan tart pie. Tiramisu apple pie sesame snaps cotton candy sugar plum. Jelly beans sugar plum candy canes donut lemon drops halvah pie biscuit.",
    "Halvah cake danish fruitcake croissant. Soufflé marzipan jelly marzipan croissant cake sugar plum. Brownie toffee dragée croissant candy canes tart. Cheesecake sweet roll sesame snaps gummi bears sweet roll. Caramels tootsie roll jelly-o. Apple pie cake jelly caramels.",
    "Biscuit sugar plum cookie fruitcake. Pie cookie chocolate bar. Toffee apple pie wafer pudding pie apple pie. Sweet pastry cake carrot cake toffee pastry. Macaroon chocolate jujubes sugar plum. Macaroon halvah jelly-o. Biscuit wafer soufflé topping sweet roll halvah marshmallow chocolate bar. Cake bonbon wafer halvah cupcake lollipop gingerbread biscuit chocolate bar. Liquorice pie jujubes caramels soufflé ice cream. Wafer fruitcake jelly brownie brownie brownie jelly beans.",
    "Biscuit fruitcake gingerbread cheesecake tootsie roll cotton candy jujubes. Sesame snaps cake topping chupa chups caramels fruitcake gummies. Candy biscuit candy danish. Candy canes fruitcake croissant lemon drops. Sugar plum gingerbread cake oat cake caramels. Lemon drops muffin cookie cake cookie chocolate cake jelly beans tootsie roll topping.",
];


const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    
    // empty
    // negative number
    // more than positive

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    }
    else {
        let tempText = text.slice(0, value);
        tempText = tempText.map(function (item) {
            return ` <p class = "result">${item}</p> `
        }).join("");
        console.log(tempText);
        result.innerHTML = tempText;
    }
    
});
