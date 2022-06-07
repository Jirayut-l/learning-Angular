import { HeroService } from "../hero";
import { HeroFavoriteService } from "../hero-favorite";

export const heroSquadFactory = (isFavorite: boolean) => {
  return () => {
    isFavorite ? new HeroFavoriteService() : new HeroService();
  };
};
