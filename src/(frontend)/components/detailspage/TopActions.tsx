import {
  addToWatchlist,
  getUserWatchlist,
  removeFromWatchlist,
} from "@/src/api/firestore/watchlist";
import { useAuth } from "@/src/context/AuthContext";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import StandardOverlay from "../standard/StandardOverlay";

const TopActions = ({ userId, itemId }: { userId: string; itemId: string }) => {
  const { user } = useAuth();

  const router = useRouter()

  const [modal, setModal] = useState<{
    title: string;
    desc: string;
    active: boolean;
  }>({ title: "", desc: "", active: false });

  const [isSaved, setIsSaved] = useState<boolean>(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (!user) {
        console.error("User not logged in");
        return;
      }
      try {
        const watchList = await getUserWatchlist(user.uid);
        if (watchList.includes(itemId)) {
          setIsSaved(true);
        }
      } catch (e) {
        setModal({ title: "Error!", desc: String(e), active: true });
        return;
      }
    };
    fetchUser();
  }, [user, itemId]);

  if (!user) {
    return (
      <View style={styles.topactions}>
        <Text style={{ color: "white" }}>Not logged in</Text>
      </View>
    );
  }

  const toggleWatchList = async () => {
    if (!userId || !itemId) return;

    try {
      if (isSaved) {
        await removeFromWatchlist(userId, itemId as string);
        setIsSaved(false);
        setModal({title: "Removed", desc: "Item removed from watchlist", active: true});
      } else {
        await addToWatchlist(userId, itemId as string);
        setIsSaved(true);
        setModal({title: "Added", desc: "Item added from watchlist", active: true});
      }
    } catch (error) {
      console.error("Failed to toggle watchlist: ", error);
      
    }
  };

  return (
    <View style={styles.topactions}>
      <TouchableOpacity onPress={() => router.back()}>
        <Image
          style={styles.backimage}
          source={require("../../../../assets/images/ProductInfo/prod-back.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={toggleWatchList}>
        <Image
          style={styles.watchlist}
          source={require("../../../../assets/images/watchlist.png")}
        />
      </TouchableOpacity>
      <StandardOverlay
        activated={modal.active}
        controller={() => setModal({ title: "", desc: "", active: false })}
        title={modal.title}
        text={modal.desc}
      />
    </View>
  );
};

export default TopActions;

const styles = StyleSheet.create({
  topactions: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backimage: {
    width: 35.2,
    height: 32.7,
  },
  watchlist: {
    width: 32,
    height: 32,
  },
});
