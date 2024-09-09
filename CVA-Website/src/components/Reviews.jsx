import "./Reviews.css";

const Reviews = () => {
  return (
    <div className="section review-section">
      <h3 className="cursive">What the clients say...</h3>
      <div className="review">
        <h4 className="review-intro">
          &quot;Having Madeline on my team has brought so much ease and
          supportive energy to my work - which has enabled me to grow and expand
          my business in ways I wouldn&apos;t have been able to without
          her&quot;
        </h4>
        <p className="review-text">
          &quot;She is a very quick learner and she picks up the needs, tasks,
          styles and tones of the client work I assign to her very quickly. I
          know that when I assign her a task, I can feel confident that
          she&apos;s got it completely taken care of and will turn it around
          quickly and to an impressive standard.&quot;
        </p>
        <p className="review-text">
          &quot;As a human soul, she&apos;s an absolute angel to work with. A
          genuine, authentic virtual assistant who I adore having on my team.
          She helps me with social media management, admin, scheduling, blog
          management, content writing, design and more. It can be hard to find
          an assistant and trust them to complete a task to the same standard as
          you would do yourself but this is just not an issue with Madeline.
          She&apos;s super intentional and thoughtful with even the smallest
          tasks and I couldn&apos;t be more grateful to her for her help.&quot;
        </p>
        <p className="review-author">- Jade Scanlon, Creative VA Studio</p>
        <p id="review-quotation-mark">&quot;</p>
      </div>
    </div>
  );
};

export default Reviews;
