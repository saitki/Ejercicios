let celular = {
    modelo: "Redmin 7 plus",
    marca: "Xiaomi",
    año: 2025,
    color: "Azul",
};

celular.getData = function() {
    return `El modelo del telefono es ${this.modelo}, marca ${this.marca} del año ${this.año}, y de color ${this.color}`;
}
console.log(celular.getData());
