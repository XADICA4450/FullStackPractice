import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../Constant/constant";
import Grid from '@mui/material/Grid2';
import { Container } from "@mui/material";


const Details = () => {

    const [shoes, setShoes] = useState(null)
    const { id } = useParams()


    const getShoes = async () => {
        try {
            const res = await axios(`${BASE_URL}/${id}`)
            setShoes(res.data.data)
            console.log(res.data.data);

        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        if (id) {
            getShoes()
        }


    }, [])




    return (
        <>
            {shoes ? <Container>
                <Grid container spacing={2}>
                    <Grid size={6}>
                        <img src={shoes.imageUrl} alt={shoes.name} width={400} />
                    </Grid>
                    <Grid size={6} style={{ display: "flex", flexDirection: 'column', gap: "1rem", justifyContent: "center" }}>
                        <h3>name: {shoes.name}</h3>
                        <p> description:{shoes.description}</p>
                        <p>Price: $ {shoes.price}</p>
                    </Grid>

                </Grid>
            </Container > : <h2>no such product!</h2>
            }
        </>
    )
}

export default Details