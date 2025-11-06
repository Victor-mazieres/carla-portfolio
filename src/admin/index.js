import CMS from "decap-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

CMS.registerMediaLibrary(cloudinary);

// Tu peux ici surcharger l’interface ou créer des widgets custom
CMS.init({
  config: {
    backend: { name: "git-gateway", branch: "main" },
  },
});
