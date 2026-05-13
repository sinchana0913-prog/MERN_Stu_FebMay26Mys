//CRUD operation using Axios
import { useState,useEffect } from "react";
import api from "../services/api";

export function CRUDOperation(){
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [result,setResult] =  useState(null);

    function resetState(){
        setError("");
        setResult(null);
    }
}