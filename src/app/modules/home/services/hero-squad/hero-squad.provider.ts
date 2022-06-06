import { HeroService } from "../hero";
import { HeroFavoriteService } from "../hero-favorite";

export const heroSquadFactory = (isFavorite: boolean) => {
  return () => {
    if (isFavorite) {
      return new HeroFavoriteService();
    }
    return new HeroService();
  };
};
