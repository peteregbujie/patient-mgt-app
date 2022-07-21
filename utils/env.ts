type NameToType = {
 readonly ENV: "production" | "staging" | "development" | "test";
 readonly NEXTAUTH_CALLBACK_URL: string;
 readonly GITHUB_SECRET: string;
 readonly GITHUB_ID: string;
 readonly DATABASE_URL: string;
 readonly NEXTAUTH_URL: string;
 readonly NODE_ENV: "production" | "development";
};

export function getEnv<Env extends keyof NameToType>(
 name: Env
): NameToType[Env];
export function getEnv(name: keyof NameToType): NameToType[keyof NameToType] {
 const val = process.env[name];

 if (!val) {
  throw new Error(`Cannot find environmental variable: ${name}`);
 }

 return val;
}
