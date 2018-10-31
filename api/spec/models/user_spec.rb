describe 'User' do
  describe 'Omniauth login' do
    context 'when it is empty of email' do
      let(:sns_user) { create(:sns_user) }
      it 'uidとproviderでemail属性を定義' do
        expect(sns_user.email).to eq sns_user.uid + '-' + sns_user.provider + '@example.com'
      end
    end
  end
end