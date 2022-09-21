import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

export function LoginCredential(email, password, callback) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      callback(userCredential);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
}

export async function GetExpenses(userId) {
  const expenseCollection = collection(db, "expenses");
  const q = query(expenseCollection, where("userId", "==", userId));
  const expenses = await getDocs(q);
  return expenses.docs.map((item) => ({ id: item.id, ...item.data() }));
}

export async function SaveExpense(expense, userId) {
  try {
    const docRef = await addDoc(collection(db, "expenses"), {
      userId: userId,
      title: expense.title,
      amount: expense.amount,
      date: expense.date.toString(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
