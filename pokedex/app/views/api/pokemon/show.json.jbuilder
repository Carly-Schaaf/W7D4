json.set! 'pokemon' do
  json.set! @pokemon.id do
    json.partial! 'pokemon', pokemon: @pokemon
  end
end

json.set! 'items' do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.image_url asset_path(item.image_url)
    end
  end
end
