import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor() {
        this._types = [
            {id: 1, name: "холодильник"},
            {id: 2, name: "Смартфоны"},
            {id: 3, name: "Ноутбуки"},
            {id: 4, name: "Телевизоры"}
        ]
        this._brands = [
            {id: 1, name: "Huawei"},
            {id: 2, name: "Samsung"},
            {id: 3, name: "Poco"},
            {id: 4, name: "Apple"},
            {id: 5, name: "Google Pixel"},
            {id: 6, name: "Meizu"},
            
        ]
        this._devices = [
            {id: 1, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 2, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 3, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 4, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 5, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 6, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            {id: 7, name: "Poco X3 pRo", price: 25000, rating: 5, img: "https://sun2-21.userapi.com/impg/mGtzAnW6yv41QuWE_Autu3YMtVThdkUktHVmbg/Cmm0obI41t8.jpg?size=749x637&quality=95&sign=278b2153177befab6c0971ebd107ce7c&type=album"},
            

        ]
        this._selected_Type = {}
        this._selected_Brand = {}
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevice(devices) {
        this._devices = devices
    }

    setSelectedType(type){
        this._selected_Type = type
    }

    setSelectedBrand(brand){
        this._selected_Brand = brand
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selected_Type
    }

    get selectedBrand() {
        return this._selected_Brand
    }
}