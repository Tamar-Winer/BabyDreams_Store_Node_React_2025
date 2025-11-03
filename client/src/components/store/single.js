import { useParams } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import Axios from "axios"
import { useRef } from 'react';
import { Toast } from 'primereact/toast';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { FileUpload } from 'primereact/fileupload';
import { InputNumber } from 'primereact/inputnumber';
import { useSelector } from 'react-redux';

const Single = () => {
    const userToken = useSelector(state => state.user.token);

    const navigate = useNavigate()
    const { _id } = useParams()
    const [product, setProduct] = useState("")
    const [editVisible, setEditVisible] = useState(false);
    const [editProduct, setEditProduct] = useState(null);
    const toast = useRef(null);
    const fileUploadRef = useRef(null);
    const [image] = useState("");
    const categories = [
        { label: 'בגדים', value: 'BabyClothes' },
        { label: 'מוצרי תינוקות', value: 'BabyProducts' },
        { label: 'Disney & Jeans', value: 'babyDisney' },
        { label: 'אקססוריז', value: 'babyAccessories' },
        { label: 'New - Born', value: 'newBorn' }
    ];

    const handleUpdateProduct = async () => {
        if (!userToken) {
            toast.current.show({
                severity: 'warn',
                summary: 'שגיאה',
                detail: 'אתה חייב להיות מחובר כדי לעדכן',
                life: 3000
            });
            return;
        }
    
        try {
            const res = await Axios.put(
                `http://localhost:1234/api/product/${editProduct._id}`,
                editProduct,
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            if (res.status === 200) {
                toast.current.show({ severity: 'success', summary: 'עודכן בהצלחה' });
                setEditVisible(false);
                getProduct();
            }
        } catch (err) {
            toast.current.show({
                severity: 'error',
                summary: 'שגיאה',
                detail: err.response?.data || err.message
            });
            console.error(err);
        }
    };
    
    const goToBasket = async (_id) => {
        if (!userToken) {
            toast.current.show({
                severity: 'warn',
                summary: 'שגיאה',
                detail: 'אתה חייב להיות מחובר כדי להוסיף לעגלה',
                life: 3000
            });
            return;
        }
    
        try {
            await Axios.put(
                "http://localhost:1234/api/basket/add",
                { _id },
                { headers: { Authorization: `Bearer ${userToken}` } }
            );
            navigate('/basket');
        } catch (e) {
            toast.current.show({
                severity: 'error',
                summary: 'שגיאה',
                detail: e.response?.data || e.message
            });
        }
    };
    

    const deleteFromDb = async (_id) => {
        if (!userToken) {
            toast.current.show({
                severity: 'warn',
                summary: 'שגיאה',
                detail: 'אתה חייב להיות מחובר כדי למחוק',
                life: 3000
            });
            return;
        }
    
        try {
            await Axios.delete(`http://localhost:1234/api/product/${_id}`, {
                headers: { Authorization: `Bearer ${userToken}` }
            });
            toast.current.show({ severity: 'success', summary: 'המוצר נמחק בהצלחה' });
            navigate('/product');
        } catch (err) {
            toast.current.show({
                severity: 'error',
                summary: 'שגיאה במחיקה',
                detail: err.response?.data || err.message
            });
            console.error(err);
        }
    }
    

    const getProduct = async () => {

        try {
            const product = await Axios.get(`http://localhost:1234/api/product/${_id}`)
            if (product.status === 200)
                setProduct(product.data)

        }
        catch (e) {
            alert(e.message)
        }


    }
    useEffect(() => {
        getProduct()
    }, []);
    return (
        <>
    <Toast ref={toast}/>
            <Dialog
                visible={editVisible}
                modal
                onHide={() => setEditVisible(false)}
                content={({ hide }) => (
                    <div
                        className="flex flex-column px-8 py-5 gap-4"
                        style={{
                            borderRadius: '12px',
                            backgroundImage: 'radial-gradient(circle at left top, var(--blue-400), var(--pink-700))',
                            maxHeight: '70vh',
                            overflowY: 'auto'

                        }}
                    >
                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="editName" className="text-primary-50 font-semibold rtl">
                                שם מוצר
                                            </label>
                            <InputText
                                id="editName"
                                value={editProduct?.prodname || ''}
                                className="bg-white-alpha-20 border-none p-3 text-primary-50 rtl"
                                onChange={(e) =>
                                    setEditProduct({ ...editProduct, prodname: e.target.value })
                                }
                            />
                        </div>

                        <div className="inline-flex flex-column gap-2">
                            <label htmlFor="editPrice" className="text-primary-50 font-semibold rtl">
                                מחיר
                                            </label>
                            <div className="w-full" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <InputNumber
                                    inputId="editPrice"
                                    value={editProduct?.price || 0}
                                    showButtons
                                    mode="currency"
                                    currency="ILS"
                                    locale="he-IL"
                                    className="w-full bg-white-alpha-20 border-none p-2 text-primary-50 rtl"
                                    inputStyle={{
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        color: 'white',
                                        direction: 'rtl'
                                    }}
                                    onValueChange={(e) =>
                                        setEditProduct({ ...editProduct, price: e.value })
                                    }
                                />
                            </div>
                        </div>

                        <div className="inline-flex flex-column gap-2 rtl">
                            <label htmlFor="editCategory" className="text-primary-50 font-semibold rtl">
                                קטגוריה
                                            </label>
                            <Dropdown
                                id="editCategory"
                                value={editProduct?.category || ''}
                                options={categories}
                                onChange={(e) =>
                                    setEditProduct({ ...editProduct, category: e.target.value })
                                }
                                placeholder="בחר קטגוריה"
                                className="bg-white-alpha-20 border-none p-1 text-primary-50 rtl"
                            />
                        </div>

                        <div className="flex  justify-content-center">

                            <FileUpload
                                ref={fileUploadRef}
                                chooseLabel={image ? "החלף תמונה" : "בחר תמונה"}
                                mode="basic"
                                name="image"
                                accept="image/*"
                                customUpload
                                onSelect={(e) => {
                                    const file = e.files?.[0];
                                    if (!file) return;
                                    const reader = new FileReader();
                                    reader.readAsDataURL(file);
                                    reader.onloadend = function () {
                                        setEditProduct((prev) => ({
                                            ...prev,
                                            image: reader.result,
                                        }));
                                        fileUploadRef.current?.clear();
                                    };
                                }}
                            />
                        </div>
                        {editProduct?.image && (
                            <div className="flex flex-column align-items-center mt-3 gap-2">
                                <div className="flex justify-content-center">
                                    <Image src={editProduct.image} alt="preview" width="150" />
                                </div>
                                <div className="flex justify-content-center">
                                    <Button
                                        label="מחק תמונה"
                                        icon="pi pi-trash"
                                        severity="danger"
                                        text
                                        onClick={() => setEditProduct.image("")}
                                    />
                                </div>
                            </div>
                        )}



                        <div className="flex align-items-center gap-2">
                            <Button
                                label="שמור"
                                onClick={handleUpdateProduct}
                                text
                                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                            />
                            <Button
                                label="ביטול"
                                onClick={(e) => { hide(e) }}
                                text
                                className="p-3 w-full text-primary-50 border-1 border-white-alpha-30 hover:bg-white-alpha-10"
                            />
                        </div>
                    </div>
                )}
            ></Dialog>
            <div className='flex flex ' style={{
                gap: "20px", justifyContent: "center", border: "20px solid transparent",
                borderRadius: '12px',
                backgroundSize: "100% 200%",
                animation: "diagonalBackground 6s ease-in-out infinite"
            }}>
                <img src={product.image} style={{ height: "400px", marginLeft: "100px", marginTop: "10px", padding: "10px" }} />
                <div className=' aaa flex flex' style={{ justifyContent: "center", flexDirection: 'column', gap: "30px" }}>
                    <div className='text-7xl bold' style={{ textAlign: "center", marginTop: "50px" }}>{product.prodname}</div>
                    <span className="flex align-items-center gap-2" style={{textAlign:"center", fontSize:"2.5rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <i className="pi pi-tag" style={{fontSize:'2.5rem'}}></i>
                        <span style={{textAlign:"center"}} className="font-semibold">{product.category}</span>
                    </span>


                    <div className="flex align-items-center justify-content-center gap-6">
                        <span className="text-5xl font-semibold">₪{product.price}</span>
                        <div className='but ' style={{ display: "flex", gap: "20px" }}>
                            <Button icon="pi pi-shopping-cart text-5xl" rounded text severity="info" aria-label="User" onClick={() => goToBasket(product._id)} />
                            <Button icon="pi pi-trash text-5xl" rounded text severity="danger" aria-label="Cancel" onClick={() => deleteFromDb(product._id)} />
                            <Button icon="pi pi-pencil text-5xl" rounded text aria-label="Filter" onClick={() => {
                                setEditProduct(product);
                                console.log("aaaa");
                                setEditVisible(true);
                                console.log(editVisible);


                            }} />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )

}
export default Single