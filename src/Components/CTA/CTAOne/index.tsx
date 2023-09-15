import { Button } from "../../Buttons/ButtonOne";

export const CallToAction = () => {
  return (
    <div className="bg-sp-secondary-500 py-24">
      <div className="text-center text-white container mx-auto">
        <p className="text-6xl mb-8">Join Us Today!</p>
        <p className="text-3xl mb-2">
          What we bring to the table is more than just a website.
        </p>
        <p className="text-3xl mb-8">
          Managing your business is difficult and time consuming, but not with
          [Insert App Here]
        </p>
        <Button type="secondary">Subscribe</Button>
      </div>
    </div>
  );
};

