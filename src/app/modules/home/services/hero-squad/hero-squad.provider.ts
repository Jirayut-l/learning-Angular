import { HeroFavoriteService } from "../hero-favorite";
import { HeroService } from "../hero";

export const heroSquadFactory = (isFavorite: boolean) => {
  return () => {
    if (isFavorite) {
      return new HeroFavoriteService();
    }
    return new HeroService();
  };
};
