const tableViewer = document.getElementById('tableViewer');
// Wait for the model to be loaded to ensure materials are accessible
tableViewer.addEventListener('load', () => {
    setupColorPickers();
    setupTexturePickers();
});
function setupColorPickers() {
    document.querySelectorAll('input[type="color"]').forEach(input => {
        input.addEventListener('input', (event) => {
            const materialName = event.target.getAttribute('data-material-name');
            updateModelColor(materialName, event.target.value);
        });
    });
}
function setupTexturePickers() {
    document.querySelectorAll('input[type="file"]').forEach((input, i) => {
        input.addEventListener("change", function () {
            const file = this.files[0];
            const viewer = tableViewer
            if (!file) return;
            const reader = new FileReader();
            reader.addEventListener('load', async function () {
                const texture = await viewer.createTexture(reader.result);
                const materialName = input.getAttribute('data-material-name');
                console.log('kev', input.getAttribute('data-material-name'))
                updateModelTexture(materialName, texture)
            });
            reader.readAsDataURL(file);
        })
    });
}
const updateModelColor = (target, color) => {
    const model = tableViewer.model;
    model.materials.forEach(material => {
        console.log('x', material.name)
        if (material.name === target) {
            material.pbrMetallicRoughness.setBaseColorFactor(color);
        }
    });
};
const updateModelTexture = (target, texture) => {
    const model = tableViewer.model;
    model.materials.forEach(material => {
        if (material.name === target) {
            material.normalTexture.setTexture(texture);
        }
    });
};
function hexToRgb(hex) {
    var r = parseInt(hex.substring(1, 3), 16) / 255;
    var g = parseInt(hex.substring(3, 5), 16) / 255;
    var b = parseInt(hex.substring(5, 7), 16) / 255;
    return [r, g, b, 1]; // Return RGBA array
}
function rotateToMaterial(materialName, cameraOrbit) {
    document.querySelector('#Legs').classList.remove('bg-danger')
    document.querySelector('#Top2_Ash').classList.remove('bg-danger')
    document.querySelector('#Plywood-sides').classList.remove('bg-danger')

    tableViewer.turntableRotation = 0; // Reset rotation
    const model = tableViewer.model;
    //make the btn-set
    model.materials.forEach(material => {


        if (material.name === materialName) {
            tableViewer.setAttribute('camera-orbit', cameraOrbit)
            tableViewer.setAttribute('selected-view', materialName)
        }
    });
    document.querySelector(`#${materialName.replace(' ', '-')}`).classList.add('bg-danger')


}

async function setupCustomTexturePickers(materialName, src) {
    if (checkifViewSelected()) {
        alert('Select view first');
        return
    }
    const texture = await tableViewer.createTexture(src);
    updateModelTexture(materialName, texture)
}

const updateCustomModelColor = (color) => {
    if (checkifViewSelected()) {
        console.log('self', tableViewer.getAttribute('selected-view').length)
        alert('Select view first');
        return
    }
    const model = tableViewer.model;
    const target = tableViewer.getAttribute('selected-view');
    model.materials.forEach(material => {
        console.log('x', material.name, target)
        if (material.name === target) {
            material.pbrMetallicRoughness.setBaseColorFactor(color);
        }
    });
};

const checkifViewSelected = () => {
    return (tableViewer.getAttribute('selected-view').length == 0)
}