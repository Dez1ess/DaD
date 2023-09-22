import "../../../AbilityDescription.scss";

export default function BardCharmHits() {
  return (
    <>
      <div className="ab-wrapper">
        <p>
          <b>Кость хітів: </b>1к8 за кожний рівень
        </p>
        <p>
          <b>Хіти на 1 рівні: </b>8 + ваший модифікатор Статури
        </p>
        <p>
          <b>Хіти на наступних рівнях: </b>1к8 (або 5) + модифікатор{" "}
          <b>Статури</b> (мінімум 1) за кожний рівень цього класа, після першого
        </p>
      </div>
    </>
  );
}
