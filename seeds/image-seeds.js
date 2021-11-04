const {Image} = require("../models")

const imageData = [
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 1,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045482/4_ajjef8.jpg"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 2,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045482/2_xktk0w.jpg"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 3,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045483/3_vljodp.jpg"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 4,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045483/placeimg_640_480_people_1_igtcko.jpg"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 5,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045483/placeimg_640_480_people_ebqjmx.jpg"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 6,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045484/placeimg_640_480_people_jle8q3.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 7,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045483/1_ojbkxk.jpg"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/beybv9cgzva6chkxxsdz.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/co9qy8vxbf2qhc3knea3.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/pwrcttkasibmy1tkt7i2.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835947/te0jqgb9bvpalebnfk3d.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/opboe2847jkdgqtekmpf.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835945/jelvqartpd6lwmav6v0d.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1635835948/xeloqi1url6heip5ny3f.png"
    },
    {
        userId: 8,
        url: "https://res.cloudinary.com/coder-mingle/image/upload/v1636045484/placeimg_640_480_people_1_nwtkf5.png"
    }
]

const seedImage = () => Image.bulkCreate(imageData)

module.exports = seedImage