import * as express from "express";

export interface Session extends Express.Session {
  userId?: string;
}
