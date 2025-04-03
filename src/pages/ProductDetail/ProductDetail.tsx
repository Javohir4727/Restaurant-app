import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "components/Header";
import BlackBackground from "components/BlackBackground";
import Footer from "components/Footer/Footer";
import GTASection from "components/GTASection/GTASection";
import { supabase } from "utils/supabase";
import Loader from "components/Loader";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useCart } from "../../context/cartContext";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<{
    title: string;
    img: string;
    description: string;
    price: number;
    category: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { cart, setCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError("Mahsulot ID topilmadi");
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from("menuItem")
          .select("*")
          .eq("id", id)
          .single();

        if (error) throw error;
        if (!data) throw new Error("Mahsulot topilmadi!");

        setProduct(data);
      } catch (error) {
        setError("Ma'lumot yuklanmadi!");
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <h1>Xatolik: {error}</h1>;

  const cartItem = cart.find((item) => item.id === id);
  const count = cartItem ? cartItem.quantity : 0;

  const handleIncrement = () => {
    if (!product || !id) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, id: id as string, quantity: 1 }];
    });
  };

  const handleDecrement = () => {
    setCart(
      (prevCart) =>
        prevCart
          .map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          )
          .filter((item) => item.quantity > 0) // Agar quantity 0 bo‘lsa, o‘chirish
    );
  };
  return (
    <div>
      <Header />
      <BlackBackground title="Product Detail" />

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: "1100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            margin: "40px 0",
            height: "400px",
            borderBottom: "2px dashed rgba(217, 217, 217, 1)",
            paddingBottom: "50px",
          }}
        >
          <div>
            {product?.img && (
              <img
                src={product.img}
                alt={product?.title}
                style={{
                  width: "500px",
                  height: "400px",
                  borderRadius: "10px",
                }}
              />
            )}
          </div>
          <div>
            <h1
              style={{
                fontFamily: "Playfair Display",
                fontWeight: "700",
                fontSize: "44px",
              }}
            >
              {product?.title}
            </h1>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 0",
              }}
            >
              <div>
                <Typography
                  sx={{ fontSize: "20px", color: "rgba(133, 133, 133, 1)" }}
                >
                  Price:
                </Typography>
                <Typography sx={{ fontWeight: "700", fontSize: "44px" }}>
                  <span style={{ color: "rgba(248, 189, 73, 1)" }}>$</span>
                  {product?.price
                    ? (product.price * Math.max(count, 1)).toFixed(2)
                    : "0.00"}
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{ fontSize: "20px", color: "rgba(133, 133, 133, 1)" }}
                >
                  Category:
                </Typography>
                <Typography
                  sx={{
                    border: "1px solid rgba(34, 34, 34, 1)",
                    textAlign: "center",
                    borderRadius: "4px",
                    marginTop: "20px",
                  }}
                >
                  {product?.category}
                </Typography>
              </div>
            </Box>
            <div>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "rgba(133, 133, 133, 1)",
                  marginBottom: "20px",
                }}
              >
                Select Quantity:
              </Typography>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button onClick={handleDecrement} variant="outlined">
                  -
                </Button>
                <span
                  style={{
                    margin: "0 20px",
                    fontSize: "30px",
                    fontWeight: "700",
                  }}
                >
                  {count < 10 ? `0${count}` : count}
                </span>
                <Button onClick={handleIncrement} variant="outlined">
                  +
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Box>

      <GTASection />
      <Footer />
    </div>
  );
};

export default ProductDetail;
