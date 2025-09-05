import { createItemPost, Item } from "@/src/api/firestore/post";

import PickImage from "@/src/(frontend)/components/listing/ImagePicker";
import TradeType from "@/src/(frontend)/components/listing/TradeType";
import TypeDropDown from "@/src/(frontend)/components/listing/TypeDropDown";
import NavBar from "@/src/(frontend)/components/standard/Navbar";
import { useAuth } from "@/src/context/AuthContext";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import StandardOverlay from "@/src/(frontend)/components/standard/StandardOverlay";
import { getAuth } from "@react-native-firebase/auth";
import { z } from "zod";
const ListingSchema = z.object({
  title: z
    .string()
    .nonempty("Item name is required")
    .max(50, "Item name must be 50 characters or less"),
  images: z
    .union([z.array(z.instanceof(File)), z.string()])
    .nullable()
    .refine((val) => val !== null, "Product image is required"),

  model: z
    .string()
    .nonempty("Model/Edition is required")
    .max(50, "Model/Edition must be 50 characters or less"),
  company: z
    .string()
    .nonempty("Company/Publication is required")
    .max(50, "Company/Publication must be 50 characters or less"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .number()
    .nonnegative("Price can't be negative")
    .max(10000, "Price must be less than 10000"),
  category: z.string().nonempty("Category is required"),
  type: z.enum(["sell", "lend", "both"], {
    errorMap: () => ({ message: "Trade type must be selected" }),
  }),
});

export default function CreateListing() {
  const { user } = useAuth();

  const companyRef = useRef<TextInput>(null);
  const descriptionRef = useRef<TextInput>(null);
  const picImageRef = useRef<{ clearImage: () => void }>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [formAlert, setFormAlert] = useState<{
    title: string;
    desc: string;
    active: boolean;
  }>({ title: "", desc: "", active: false });

  const [formState, setFormState] = useState<
    Omit<Item, "location" | "ownerId" | "id">
  >({
    title: "",
    images: null,
    type: "sell",
    category: "",
    model: "",
    company: "",
    description: "",
    price: 0,
  });
  if (!user) throw new Error("The user isn't authenticated");

  const handleChange = (
    key: keyof Omit<Item, "location" | "ownerId">,
    value: any
  ) => {
    setFormState({
      ...formState,
      [key]: value,
    });
  };

  const handleSubmit = async (
    formState: Omit<Item, "location" | "ownerId" | "id">
  ) => {
    const result = ListingSchema.safeParse(formState);
    if (!result.success) {
      const error = result.error.format();
      const firstError =
        error.title?._errors[0] ||
        error.images?._errors[0] ||
        error.category?._errors[0] ||
        error.model?._errors[0] ||
        error.company?._errors[0] ||
        error.description?._errors[0] ||
        error.price?._errors[0] ||
        error.type?._errors[0] ||
        "Invalid Input";

      setFormAlert({
        title: "Oops!",
        desc: firstError,
        active: true,
      });
      return;
    }

    try {
      const idToken = await getAuth().currentUser?.getIdToken();
      if (!idToken) throw new Error("User not authenticated");
      setLoading(true)
      await createItemPost(
        { ...formState, ownerId: user.uid, location: null },
        idToken
      );

      setFormState({
        title: "",
        images: null,
        type: "sell",
        category: "",
        model: "",
        company: "",
        description: "",
        price: 0,
      });
      picImageRef.current?.clearImage();

      setFormAlert({
        title: "Success!",
        desc: "Item successfully posted!",
        active: true,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView enabled behavior="padding" style={styles.container}>
      <NavBar title="Add Listing" />

      <ScrollView style={styles.ScrollContainer}>
        <Text style={styles.heading1}>Item Name*</Text>

        <TextInput
          style={styles.input1}
          placeholder="Add Name"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.title}
          onChangeText={(text) => handleChange("title", text)}
        />

        <Text style={styles.heading1}>Product Image*</Text>
        <PickImage
          handleUpload={(image: File | string) => handleChange("images", image)}
          ref={picImageRef}
        />

        <Text style={styles.heading1}>Item Type*</Text>
        <TypeDropDown
          handleClick={(category: string) => handleChange("category", category)}
          selectedId={formState.category}
        />

        <Text style={styles.heading1}>Model/Edition*</Text>
        <TextInput
          style={styles.input1}
          placeholder="eg. Manik Edition"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.model}
          onChangeText={(model) => handleChange("model", model)}
          onSubmitEditing={() => companyRef.current?.focus()}
          returnKeyType="next"
        />

        <Text style={styles.heading1}>Company/Publication*</Text>
        <TextInput
          ref={companyRef}
          style={styles.input1}
          placeholder="eg. Jaypee Cement"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.company}
          onChangeText={(company) => handleChange("company", company)}
          onSubmitEditing={() => descriptionRef.current?.focus()}
          returnKeyType="next"
        />

        <Text style={styles.heading1}>Item Description*</Text>
        <TextInput
          ref={descriptionRef}
          multiline={true}
          style={styles.input1}
          placeholder="(Min 10 words.) eg. A platform to sell books that is created by three people oh five people"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.description}
          onChangeText={(description) =>
            handleChange("description", description)
          }
        />

        <Text style={styles.heading1}> Price </Text>
        <TextInput
          style={styles.input1}
          placeholder="Enter price"
          placeholderTextColor="#efe3c87a"
          defaultValue={formState.price.toString()}
          onChangeText={(price) => {
            if (price === "") {
              handleChange("price", 0);
              return;
            }
            const cleanPrice = price.replace(/[^0-9.]/g, "");
            const parts = cleanPrice.split(".");
            const finalPrice =
              parts[0] + (parts.length > 1 ? "." + parts[1] : "");

            const numPrice = parseFloat(finalPrice);
            if (!isNaN(numPrice)) {
              handleChange("price", numPrice);
            }
          }}
          keyboardType="decimal-pad"
        />
        <Text style={styles.heading1}>Trade Type*</Text>
        <TradeType
          handleTypeChange={(type) => handleChange("type", type)}
          selectedType={formState.type}
        />
      </ScrollView>
      <View style={styles.buttonsbox}>
        <TouchableOpacity
          onPress={() => {
            console.log("submitted");
            handleSubmit(formState);
          }}
          disabled={loading}
        >
          <View style={styles.button}>
            <Text
              style={{ color: "#4A2B29", fontSize: 16, textAlign: "center" }}
            >
              {loading ? "Adding item...": "Submit item"}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button2}>
            <Text style={styles.text2}>Cancel, nevermind!</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StandardOverlay
        activated={formAlert.active}
        controller={(isActive: boolean) =>
          setFormAlert({ title: "", desc: "", active: isActive })
        }
        title={formAlert.title}
        text={formAlert.desc}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 5,
  },
  ScrollContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#1C161E",
    height: "100%",
    width: "100%",
    padding: 5,
    gap: 20,
  },
  input1: {
    color: "#EFE3C8",
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "rgba(245, 245, 220, 0.2)",
  },
  heading1: {
    margin: 5,
    borderRadius: 10,
    color: "#ffffff",
    fontFamily: "Rosarivo",
    fontSize: 16,
    marginTop: 10,
    textShadowRadius: 20,
    textShadowColor: "#11111192",
  },
  buttonsbox: {
    gap: 10,
    padding: 10,
    paddingBottom: 0,
  },
  button: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#EFE3C8",
    alignContent: "center",
    justifyContent: "center",
  },
  button2: {
    borderColor: "#EFE3C8",
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#efe3c800",
    alignContent: "center",
    justifyContent: "center",
  },
  text2: {
    fontSize: 16,
    color: "#F5F5DC",
    alignSelf: "center",
  },
});
