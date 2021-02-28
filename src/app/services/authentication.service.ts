import { Injectable } from "@angular/core";
import firebase from "firebase";
import { AngularFireAuth } from "@angular/fire/auth";
import User = firebase.User;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user?: User;

  constructor(private afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  // Sign in with email/password
  async signIn(email: string, password: string): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  async signOut(): Promise<any> {
    return this.afAuth.signOut();
  }
}
