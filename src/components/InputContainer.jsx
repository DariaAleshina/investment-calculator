export default function InputContainer() {
  return (
    <div id="user-input">
      <div class="input-group">
        <div>
          <label for="init-inv">Initial Investment</label>
          <input name="init-inv" type="number"></input>
        </div>
        <div>
          <label for="ann-inv">Annual Investment</label>
          <input name="ann-inv" type="number"></input>
        </div>
      </div>
      <div class="input-group">
        <div>
          <label for="return">Expected Return</label>
          <input name="return" type="number"></input>
        </div>
        <div>
          <label for="duration">Duration</label>
          <input name="duration" type="number"></input>
        </div>
      </div>
    </div>
  );
}
